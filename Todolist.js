// ToDo List Application

const todoList = [];

// Function to add tasks to the ToDo list with specified categories
const addTask = (task, category) => {
    const newTask = {
        task: task,
        category: category,
        completed: false,
    };
    todoList.push(newTask);
    console.log(`Task '${task}' added to the '${category}' category.`);
};

// Function to display tasks grouped by their categories
const displayTasksByCategory = () => {
    const tasksByCategory = {};

    todoList.forEach(task => {
        const category = task.category;
        if (!tasksByCategory[category]) {
            tasksByCategory[category] = [];
        }
        tasksByCategory[category].push(task);
    });

    console.log('Tasks by Category:');
    for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach(task => {
            console.log(`  ${task.completed ? '[X]' : '[ ]'} ${task.task}`);
        });
    }
};

// Function to mark tasks as completed
const markTaskAsCompleted = (task) => {
    const foundTask = todoList.find(item => item.task === task);
    if (foundTask) {
        foundTask.completed = true;
        console.log(`Task '${task}' marked as completed.`);
    } else {
        console.log(`Task '${task}' not found in the ToDo list.`);
    }
};

// Function to remove tasks from the list
const removeTask = (task) => {
    const index = todoList.findIndex(item => item.task === task);
    if (index !== -1) {
        const removedTask = todoList.splice(index, 1)[0];
        console.log(`Task '${removedTask.task}' removed from the ToDo list.`);
    } else {
        console.log(`Task '${task}' not found in the ToDo list.`);
    }
};

// Example usage:

// Adding tasks to the ToDo list with specified categories
addTask('Buy groceries', 'Personal');
addTask('Finish project', 'Work');
addTask('Exercise', 'Personal');
addTask('Read book', 'Personal');

// Displaying tasks grouped by categories
displayTasksByCategory();

// Marking a task as completed
markTaskAsCompleted('Buy groceries');

// Removing a task from the ToDo list
removeTask('Exercise');

// Displaying tasks grouped by categories after modification
displayTasksByCategory();
