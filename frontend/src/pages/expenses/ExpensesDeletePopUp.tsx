import React from 'react';

interface DeletePopupProps {
  expenseId: string;
  onClose: () => void;
  onDelete: (expenseId: string) => void; // Accept expense ID as a parameter
}

const DeletePopup: React.FC<DeletePopupProps> = ({
  expenseId,
  onClose,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(expenseId); // Pass the expense ID to onDelete
    onClose();
  };

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        <h2>Delete Expense</h2>
        <p>
          Are you sure you want to delete the expense with ID "{expenseId}"?
        </p>
        <div className='button-container expense-buttons'>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
