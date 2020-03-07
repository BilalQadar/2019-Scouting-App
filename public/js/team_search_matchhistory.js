function populateMatchHistory() {
    //matchHistoryOverall();
    matchHistoryAuto();
    matchHistoryTeleop();
    matchHistoryClimb();
    matchHistoryDefense();
    matchHistoryComments();
    pitData();
}

function matchHistoryOverall() {

    $('#overall_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var row = $('<tr></tr>');

        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        $('#overall_table').append(row);

    }

}

function matchHistoryAuto() {

    $('#auto_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var row = $('<tr></tr>');
        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        row.append($('<td></td>').text(data.auto_innerport_success[i] ));
        row.append($('<td></td>').text(data.auto_outerport_fail[i]));
        row.append($('<td></td>').text(data.auto_outerport_success[i]));
        row.append($('<td></td>').text(data.auto_lowport_fail[i]));
        row.append($('<td></td>').text(data.auto_lowport_success[i]));
        row.append($('<td></td>').text(data.auto_line[i]));
        row.append($('<td></td>').text(data.no_auto[i]));
        $('#auto_table').append(row);

    }

}

function matchHistoryTeleop() {

    $('#teleop_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var c_inner = 0;
        var c_outer_missed = 0;
        var c_outer_scored = 0;
        var c_lower_missed = 0;
        var c_lower_scored = 0;
        var total_inner_cycles = 0;
        var total_outer_cycles = 0;
        var total_lower_cycles = 0;


        var c_inner_array = [data.teleop_inner_c1[i],data.teleop_inner_c2[i],
        data.teleop_inner_c3[i],data.teleop_inner_c4[i],data.teleop_inner_c5[i],
        data.teleop_inner_c6[i],data.teleop_inner_c7[i],data.teleop_inner_c8[i],
        data.teleop_inner_c9[i],data.teleop_inner_c10[i]];

        var c_outer_missed_array = [data.teleop_outer_fail_c1[i],data.teleop_outer_fail_c2[i],
        data.teleop_outer_fail_c3[i],data.teleop_outer_fail_c4[i],data.teleop_outer_fail_c5[i],
        data.teleop_outer_fail_c6[i],data.teleop_outer_fail_c7[i],data.teleop_outer_fail_c8[i],
        data.teleop_outer_fail_c9[i],data.teleop_outer_fail_c10[i]];

        var c_outer_scored_array = [data.teleop_outer_success_c1[i],data.teleop_outer_success_c2[i],
        data.teleop_outer_success_c3[i],data.teleop_outer_success_c4[i],data.teleop_outer_success_c5[i],
        data.teleop_outer_success_c6[i],data.teleop_outer_success_c7[i],data.teleop_outer_success_c8[i],
        data.teleop_outer_success_c9[i],data.teleop_outer_success_c10[i]];

        var c_lower_missed_array = [data.teleop_lower_fail_c1[i],data.teleop_lower_fail_c2[i],
        data.teleop_lower_fail_c3[i],data.teleop_lower_fail_c4[i],data.teleop_lower_fail_c5[i],
        data.teleop_lower_fail_c6[i],data.teleop_lower_fail_c7[i],data.teleop_lower_fail_c8[i],
        data.teleop_lower_fail_c9[i],data.teleop_lower_fail_c10[i]];

        var c_lower_scored_array = [data.teleop_lower_success_c1[i],data.teleop_lower_success_c2[i],
        data.teleop_lower_success_c3[i],data.teleop_lower_success_c4[i],data.teleop_lower_success_c5[i],
        data.teleop_lower_success_c6[i],data.teleop_lower_success_c7[i],data.teleop_lower_success_c8[i],
        data.teleop_lower_success_c9[i],data.teleop_lower_success_c10[i]];

        for (j=0; j < c_inner_array.length; j++){
          c_inner += parseInt(c_inner_array[j]);
          if (parseInt(c_inner_array[i]) > 0){
            total_inner_cycles += 1;
          }
        };

        for (j=0; j < c_outer_missed_array.length; j++){
          c_outer_missed += parseInt(c_outer_missed_array[j]);
          if (parseInt(c_outer_missed[i]) > '0'){
            total_outer_cycles += 1;
          }
        };

        for (j=0; j < c_outer_scored_array.length; j++){
          c_outer_scored += parseInt(c_outer_scored_array[j]);
          if (parseInt(c_outer_scored_array[i]) > 0){
            total_outer_cycles += 1;
          }
        };

        for (j=0; j < c_lower_scored_array.length; j++){
          c_lower_scored += parseInt(c_lower_scored_array[j]);
          if (parseInt(c_lower_scored_array[i]) > 0){
            total_lower_cycles += 1;
          }
        };

        for (j=0; j < c_lower_missed_array.length; j++){
          c_lower_missed += parseInt(c_lower_missed_array[j]);
          if (parseInt(c_lower_missed_array[i]) > 0){
            total_lower_cycles += 1;
          }
        };
        var total_cycles = total_inner_cycles+total_lower_cycles+total_outer_cycles;
        var ppc = ((3*c_inner) + (2*c_outer_scored )+ c_lower_scored)/total_cycles;

        var row = $('<tr></tr>');
        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        row.append($('<td></td>').text(c_inner.toString()));
        row.append($('<td></td>').text(c_outer_missed.toString()));
        row.append($('<td></td>').text(c_outer_scored.toString()));
        row.append($('<td></td>').text(c_lower_missed.toString()));
        row.append($('<td></td>').text(c_lower_scored.toString()));
        row.append($('<td></td>').text(total_cycles.toString()));
        row.append($('<td></td>').text(ppc.toString()));

        $('#teleop_table').append(row);

    }

}

function matchHistoryClimb () {

    $('#climb_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var row = $('<tr></tr>');

        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        row.append($('<td></td>').text(data.climb_assist[i]));
        row.append($('<td></td>').text(data.climb_lift[i]));
        row.append($('<td></td>').text(data.climb_notes[i]));
        row.append($('<td></td>').text(data.climb_scale_level[i]));
        row.append($('<td></td>').text(data.climb[i]));


        $('#climb_table').append(row);

    }
}

function matchHistoryDefense() {

    $('#defense_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var row = $('<tr></tr>');

        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        row.append($('<th scope="row"></th>').text(data.fit_under_panel[i]));
        row.append($('<th scope="row"></th>').text(data.defense_type[i]));
        row.append($('<th scope="row"></th>').text(data.defense_strength[i]));
        $('#defense_table').append(row);

    }
}

function matchHistoryComments() {

    $('#comment_table').html("");

    for (i = 0; i < data.match_number.length; i++) {

        var row = $('<tr></tr>');

        row.append($('<th scope="row"></th>').text(data.match_number[i]));
        row.append($('<td></td>').text(data.match_scouter[i]));
        row.append($('<td></td>').text(data.match_comment[i]));

        $('#comment_table').append(row);

    }

}


function pitData() {
    var pitdata = []
    firebase.database().ref('pitdata/' + team + '/switch_capable').on('value', function(snapshot) {
        pitdata[0] = snapshot.val()
    });
    firebase.database().ref('pitdata/' + team + '/scale_capable').on('value', function(snapshot) {
        pitdata[1] = snapshot.val()
    });
    firebase.database().ref('pitdata/' + team + '/comments').on('value', function(snapshot) {
        pitdata[2] = snapshot.val()
        $('#pit_table').html("");
        var row = $('<tr></tr>');
        row.append($('<td></td>').text(pitdata[0]));
        row.append($('<td></td>').text(pitdata[1]));
        row.append($('<td></td>').text(pitdata[2]));
        $('#pit_table').append(row);
    });

}
