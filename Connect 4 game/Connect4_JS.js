$(document).ready(function () {
    alert("Welcome to the Connect4 game. Have fun :D");
    let player_1 = prompt("Player One: Enter your name, you will be Green");
    let player_2 = prompt("Player Two: Enter your Name, you will be Red");
    let click_count = 0;


    function change_color(table_row, column_index, color) {
        for (let i = table_row.length - 1; i >= 0; i--) {
            let table_cell = table_row.eq(i).find('td').eq(column_index).find('circle');
            let fill = table_cell.css('fill');
            if (fill === 'rgb(211, 211, 211)') {
                table_cell.css('fill', color);
                break;
            }
        }
    }


    function return_color(click_count){
        if (click_count % 2 === 0){
            return 'green'
        }
        else {
            return 'red'
        }
    }


    function return_player(click_count){
        if (click_count % 2 === 0){
            return player_1
        }
        else {
            return player_2
        }
    }


    function is_win(table_row){
        let fill_1, fill_2, fill_3, fill_4;

        // Row win
        for (let i = 0; i < table_row.length; i++){
            for (let j = 0; j < 4; j++){
                fill_1 = table_row.eq(i).find('td').eq(j).find('circle').css('fill');
                fill_2 = table_row.eq(i).find('td').eq(j + 1).find('circle').css('fill');
                fill_3 = table_row.eq(i).find('td').eq(j + 2).find('circle').css('fill');
                fill_4 = table_row.eq(i).find('td').eq(j + 3).find('circle').css('fill');
                if (fill_1 === fill_2 && fill_1 === fill_3 && fill_1 === fill_4 && fill_1 !== 'rgb(211, 211, 211)'){
                    return true
                }
            }
        }

        // Column win
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 4; j++){
                fill_1 = table_row.eq(j).find('td').eq(i).find('circle').css('fill');
                fill_2 = table_row.eq(j + 1).find('td').eq(i).find('circle').css('fill');
                fill_3 = table_row.eq(j + 2).find('td').eq(i).find('circle').css('fill');
                fill_4 = table_row.eq(j + 3).find('td').eq(i).find('circle').css('fill');
                if (fill_1 === fill_2 && fill_1 === fill_3 && fill_1 === fill_4 && fill_1 !== 'rgb(211, 211, 211)'){
                    return true
                }
            }
        }

        // Diagonal win

    }


    $('#notifier').text(player_1 + ": First turn is yours... Click any cell!").css('color', 'green');

    $('circle').click(function () {
        let player = return_player(click_count);
        let color = return_color(click_count);
        let column_index = $(this).closest("td").index();
        let table_row = $('tr');
        change_color(table_row, column_index, color);
        if (is_win(table_row)){
            $('#notifier').text(player + ": Congratulations! You have won :D");
            $('table').fadeOut(1500);
        }
        else {
            click_count += 1;
            player = return_player(click_count);
            color = return_color(click_count);
            $('#notifier').text(player + ": It's your turn now. Click any cell!").css('color', color);
        }
    });

    $('#restart_button').click(function () {
        location.reload();
    })
});
