$(document).ready( function(){
    console.log("Thatnaraiwittay School 2022");
    $("#nav-text-th").hide();
    $("#nav-text-en").hide();
    setInterval(function(){                 
        if( $("#nav-text-th").is(":visible") ){            
            $("div[id^=nav-text-]").hide();
            $("#nav-text-en").slideToggle( "slow", function() {});
        }
        else{
            $("div[id^=nav-text-]").hide();
            $("#nav-text-th").slideToggle( "slow", function() {});
        }        
    }, 5000);
    
});    
