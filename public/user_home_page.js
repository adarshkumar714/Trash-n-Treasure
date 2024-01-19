const details = document.querySelector('.details');

if(details.children.length==0){
    details.innerHTML = '<h1 style="text-align: center; color: #808080c4;">No tasks!</h1>'
}


function add_new_task(data){
    if(details.children[0].tagName=='H1'){details.innerHTML = ''}
    let new_task = document.createElement('div');
    new_task.setAttribute('class', 'detail');
    new_task.setAttribute('id', data.id);
    
    new_task.innerHTML = `
                        <div class="location">
                            <b>Location:</b> ${data.location}
                        </div>
                        <div class="name">
                            <b>Name:</b> ${data.name}
                        </div>
                        <div class="Phone_no">
                            <b>Phone no.:</b> ${data.phNumber}
                        </div>
                        <div class="btn">
                            <button class="button" id='${data.id}' onclick='deleteTask()'>
                                <div class="text">
                                    <p>Task Completed</p>
                                </div>
                            </button>
                        </div>
    `
    details.appendChild(new_task);
}

function deleteTask(){
    console.log(this)
}


socket.on('new-dump-location', (data)=>{
    console.log(JSON.parse(data))
    add_new_task(JSON.parse(data));
})

