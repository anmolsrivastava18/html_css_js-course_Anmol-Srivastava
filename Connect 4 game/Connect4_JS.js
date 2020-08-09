// The script will wait for the HTML content to be loaded
$(document).ready(function () {
    // Greeting the players
    alert("Welcome to the Connect4 game. Have fun :D");

    // Prompting the players to enter their name
    let player_1 = prompt("Player One: Enter your name, you will be Green");
    let player_2 = prompt("Player Two: Enter your Name, you will be Red");

    // This variable will store the number of clicks by the users
    let click_count = 0;


    // The following function will be used to switch the colors of the circle only when the color is lightgrey
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


    // The following function will return the color, which then will be passed to the 'change_color' function
    function return_color(click_count){
        if (click_count % 2 === 0){
            return 'green'
        }
        else {
            return 'red'
        }
    }

    // The following function will return the player whose turn is next
    function return_player(click_count){
        if (click_count % 2 === 0){
            return player_1
        }
        else {
            return player_2
        }
    }


    //  The following function will determine if any user won the game
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

        // Negative slope Diagonal win
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 4; j++){
                fill_1 = table_row.eq(i).find('td').eq(j).find('circle').css('fill');
                fill_2 = table_row.eq(i + 1).find('td').eq(j + 1).find('circle').css('fill');
                fill_3 = table_row.eq(i + 2).find('td').eq(j + 2).find('circle').css('fill');
                fill_4 = table_row.eq(i + 3).find('td').eq(j + 3).find('circle').css('fill');
                if (fill_1 === fill_2 && fill_1 === fill_3 && fill_1 === fill_4 && fill_1 !== 'rgb(211, 211, 211)'){
                    return true
                }
            }
        }

        // Positive slope Diagonal win
        for (let i = 0; i < 3; i++){
            for (let j = 6; j > 2; j--){
                fill_1 = table_row.eq(i).find('td').eq(j).find('circle').css('fill');
                fill_2 = table_row.eq(i + 1).find('td').eq(j - 1).find('circle').css('fill');
                fill_3 = table_row.eq(i + 2).find('td').eq(j - 2).find('circle').css('fill');
                fill_4 = table_row.eq(i + 3).find('td').eq(j - 3).find('circle').css('fill');
                if (fill_1 === fill_2 && fill_1 === fill_3 && fill_1 === fill_4 && fill_1 !== 'rgb(211, 211, 211)'){
                    return true
                }
            }
        }
    }

    //  The very first notification
    $('#notifier').text(player_1 + ": First turn is yours... Click any cell!").css('color', 'green');

    //  The following block is the game logic and will invoke different functions to play the game
    $('circle').click(function () {
        let player = return_player(click_count);
        let color = return_color(click_count);
        let column_index = $(this).closest("td").index();
        let table_row = $('tr');

        //  The following block of code will ensure that the turn doesn't pass to another player if one of the players
        //  click on the already filled top-most circle.
        let top_row_cell = table_row.eq(0).find('td').eq(column_index).find('circle');
        let color_fill = top_row_cell.css('fill');
        if (color_fill !== 'rgb(211, 211, 211)'){
            click_count -= 1;
        }

        //  Call to the 'change_color' function
        change_color(table_row, column_index, color);
        if (is_win(table_row)){
            $('#notifier').text(player + ": Congratulations! You have won :D");
            $('table').fadeOut(2000);
        }
        else {
            click_count += 1;
            player = return_player(click_count);
            color = return_color(click_count);
            $('#notifier').text(player + ": It's your turn now. Click any cell!").css('color', color);
        }

        if (click_count === 42){
            $('#notifier').text("Guys, it's a draw!");
            $('table').fadeOut(2000);
        }
    });

    $('#restart_button').click(function () {
        location.reload();
    })
});
