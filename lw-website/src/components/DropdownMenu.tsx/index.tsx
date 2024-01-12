// DropdownMenu.js
import React from 'react';
import styles from './styles.module.scss';

interface DropdownMenuProps {
  isOpen: boolean; // Explicitly define the type as boolean
  onClose: () => void; // Function that takes no arguments and returns void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose }) => {
  // If the dropdown is not open, return null to render nothing
  if (!isOpen) {
    return null;
  }

  // Render the dropdown menu
  return (
    <div className={styles.dropdownMenu} onClick={onClose}>
      {/* Your dropdown content goes here */}
      <div className={styles.dropdownContent}>
        <p>Dropdown Content Here</p>
        {/* You can add more elements and styling as needed */}
      </div>
    </div>
  );
};

export default DropdownMenu;
