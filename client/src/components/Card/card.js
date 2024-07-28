// components/TaskCard.js

import React from 'react';
import './card.css';

const TaskCard = ({
  taskId,
  description,
  onDelete,
  onEdit,
  isEditing,
  editDescription,
  setEditDescription,
  onSave
}) => {
  return (
    <div className="task-card">
      <div className="task-card-content">
        <p><strong>ID:</strong> {taskId}</p>
        {isEditing ? (
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Enter new description"
            className="task-card-input"
          />
        ) : (
          <p><strong>Description:</strong> {description}</p>
        )}
      </div>
      <div className="task-card-actions">
        <button onClick={onDelete}>Delete</button>
        {isEditing ? (
          <button onClick={onSave}>Save</button>
        ) : (
          <button onClick={onEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
