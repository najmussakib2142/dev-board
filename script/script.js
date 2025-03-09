// document.addEventListener('DOMContentLoaded', function(){
    // const taskCountElement = document.getElementById('task-count');
    // const projectCountElement = document.getElementById('project-count');
    // const completeButtons = document.querySelectorAll('.complete-btn');
// 
    // let taskCount = parseInt(taskCountElement.textContent);
    // let projectCount = parseInt(projectCountElement.textContent);

    // completeButtons.forEach(button => {
        // button.addEventListener('click', function(event){
            
            // if(!this.disable){
                // taskCount--;
                // taskCountElement.textContent = taskCount.toString().padStart(2, '0');
    // 
                // projectCount++;
                // projectCountElement.textContent = projectCount;
    // 
                // this.disable = true;
                // this.classList.add('disabled-btn');
            // }
        // })
    // })
// })

    let completedProjects = 0;
    const totalProjects = 6;
    // card - 1
document.getElementById('mobile-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Fix Mobile Button issue at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })
        // card - 2
document.getElementById('dark-mode-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Add Dark Mode at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })
        // card - 3
document.getElementById('swiftpay-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Optimize Home page at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })
        // card - 4
document.getElementById('meta-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Add new emoji 🤲 at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })
        // card - 5
document.getElementById('google-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Integrate OpenAI API at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })
        // card - 6
document.getElementById('glassdoar-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        alert('Board updated Successfully');
        // task Count --
        let taskCount = document.getElementById('task-count').innerText;
        taskCount = parseInt(taskCount)
        taskCount--;
        document.getElementById('task-count').innerText = taskCount.toString().padStart(2, '0');

        this.disable = true;
        this.classList.add('disabled-btn');
        // project count ++
        let projectCount = document.getElementById('project-count').innerText;
        projectCount = parseInt(projectCount);
        projectCount++;
        document.getElementById('project-count').innerText = projectCount;
        // Activity Log Container
        const container = document.getElementById('activity-log-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-3', 'm-3');

        const now = new Date();
        const time = now.toLocaleTimeString();

        div.innerHTML = `
        <p>You have Completed The Task Improve Job searching at ${time}</p>
        `
        container.appendChild(div);

        completedProjects++;
        if(completedProjects === totalProjects){
            alert('congrates!!! You have completed all the current task')
        }

    })


    document.getElementById('clear-history-btn')
        .addEventListener('click', function(event){
            event.preventDefault();
            const container =  document.getElementById('activity-log-container');
            container.innerHTML = '';
            
        })










function changeBgColor(){
    const randomColor = Math.floor(Math.random() * 16777215);
    const randomColorHex = '#' + randomColor.toString(16);

    document.body.style.backgroundColor = randomColorHex;
}

function showDateAndTime(){
    const now = new Date();

    const dayNumber = now.getDay();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];             
    const dayName = dayNames[dayNumber];

    const monthNumber = now.getMonth();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[monthNumber];

    const year = now.getFullYear();
    const day = now.getDate();

    const dateString = `
    <span class = 'font-normal'>${dayName}</span> , <br> ${monthName} ${day} ${year}
    `;
    document.getElementById('date').innerHTML = dateString;
}
showDateAndTime();

document.getElementById('discovery-btn')
    .addEventListener('click', function(){
        window.location.href = 'blogs.html'
    })