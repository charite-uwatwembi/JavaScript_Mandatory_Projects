const taskScheduler = {
    tasks: [],

    
    addTask: function (title, description, dueDate) {
        const newTask = {
            title: title,
            description: description,
            dueDate: new Date(dueDate),
            completed: false,
        };
        this.tasks.push(newTask);
        console.log(`Task '${title}' added to the scheduler with due date ${dueDate}.`);
    },

    
    displayTasksByDueDate: function () {
        const sortedTasks = [...this.tasks].sort((a, b) => a.dueDate - b.dueDate);

        console.log('Tasks sorted by due date:');
        sortedTasks.forEach(task => {
            console.log(`Title: ${task.title}, Due Date: ${task.dueDate.toDateString()}, Completed: ${task.completed}`);
        });
    },

    
    updateTask: function (title, updatedDescription, updatedDueDate, markCompleted) {
        const taskToUpdate = this.tasks.find(task => task.title === title);

        if (taskToUpdate) {
            taskToUpdate.description = updatedDescription || taskToUpdate.description;
            taskToUpdate.dueDate = updatedDueDate ? new Date(updatedDueDate) : taskToUpdate.dueDate;
            taskToUpdate.completed = markCompleted !== undefined ? markCompleted : taskToUpdate.completed;
            console.log(`Task '${title}' updated.`);
        } else {
            console.log(`Task '${title}' not found.`);
        }
    },

    
    removeTask: function (title) {
        const indexToRemove = this.tasks.findIndex(task => task.title === title);

        if (indexToRemove !== -1) {
            const removedTask = this.tasks.splice(indexToRemove, 1)[0];
            console.log(`Task '${removedTask.title}' removed from the scheduler.`);
        } else {
            console.log(`Task '${title}' not found.`);
        }
    },
};


taskScheduler.addTask('Complete project', 'Finish coding and testing', '2024-03-01');
taskScheduler.addTask('Meeting with team', 'Discuss project updates', '2024-02-28');
taskScheduler.addTask('Read book', 'Finish reading "The Hitchhiker\'s Guide to the Galaxy"', '2024-03-05');


console.log('**'.repeat(5));
console.log('**'.repeat(4));




taskScheduler.updateTask('Complete project', 'Finalize documentation', '2024-03-02', true);
taskScheduler.displayTasksByDueDate();


console.log('**'.repeat(5));
console.log('**'.repeat(4));

 taskScheduler.removeTask('Meeting with team');


console.log('**'.repeat(5));
console.log('**'.repeat(4));

taskScheduler.displayTasksByDueDate();
