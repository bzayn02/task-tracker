import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 3 pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Library',
            day: 'Feb 12th at 3 pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Grocery shopping',
            day: 'March 5th at 3 pm',
            reminder: false,
        },
    ])

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
        <div className="container">
            <h1>
                <Header
                    onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                    <Tasks
                        tasks={tasks}
                        onDelete={deleteTask}
                        onToggle={toggleReminder}
                    />
                ) : (
                    'No Tasks To Show'
                )}
            </h1>
        </div>
    )
}

export default App
