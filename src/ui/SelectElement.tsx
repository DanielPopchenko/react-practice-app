import { SyntheticEvent, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const options = [
  { option: 'None', icon: <RxCross1 style={{ fontSize: 20 }} /> },
  { option: 'Edit title', icon: <BiSearch style={{ fontSize: 20 }} /> },
  {
    option: 'Edit date',
    icon: <BsCalendar2DateFill style={{ fontSize: 17 }} />,
  },
  { option: 'Delete todo', icon: <AiFillDelete style={{ fontSize: 20 }} /> },
];

const ITEM_HEIGHT = 48;

export default function SelectElement() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget.nodeValue);
    console.log(e.currentTarget);
    console.log(anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(({ option, icon }) => (
          <MenuItem
            key={option}
            selected={option === 'None'}
            onClick={handleClose}
          >
            {icon}
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
