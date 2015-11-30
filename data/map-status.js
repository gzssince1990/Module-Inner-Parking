/**
 * Created by W2BI on 11/25/2015.
 */

updateStatus();
setInterval("updateStatus()",1000);

/**
 * Update status of spots in the parking lot
 * Green means spot is available,
 * Red means spot is unavailable.
 */
function updateStatus(){
    $.ajax({
        url: "/parking-status",
        type: 'GET',
        dataType: 'json',
        success: function(status){
            for(var i in status){
                for(var j in status[i]){
                    if(status[i][j]){
                        $("#col"+i+"r"+j).css({fill: 'green'});
                    }else {
                        $("#col"+i+"r"+j).css({fill: 'red'});
                    }
                }
            }
        },
        error: function(error){
            alert(error)
        }
    });
}
