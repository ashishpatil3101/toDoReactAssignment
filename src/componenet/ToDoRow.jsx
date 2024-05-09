import { useState } from 'react'
import Button from './Button';
import Checkbox from './CheckBox';

const TodoRow = ({ todo, onDelete, onComplete }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="flex justify-between items-center py-2  hover:bg-gray-100 mb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Checkbox
                label={todo.text}
                isChecked={todo.completed}
                onChange={() => onComplete(todo.id)}
            />
            {isHovered && (
                <Button variant="small" onClick={() => onDelete(todo.id)}>
                    <i className="ri-close-line"></i>
                </Button>
            )}
        </div>
    );

};

export default TodoRow;