const btnPlus = document.getElementById("btnPlus");

btnPlus.onclick = function (status) {
    plus(status);

};

function plus(status) {

    let status1HTML = '';
    status1HTML += `                       
        <i class="far fa-circle"></i>                                                                   
    `;

    let status2HTML = '';
    status2HTML += `    
        
            <p>Create quotation app redesign project</p>                    
                         
    `;

    let status3HTML = '';
    status3HTML += `    
        <div class="box box-D">
            <p>Waiting</p>
        </div>                  
    `;

    document.getElementById("status1").innerHTML = status1HTML;
    document.getElementById("status2").innerHTML = status2HTML;
    document.getElementById("status3").innerHTML = status3HTML;
}