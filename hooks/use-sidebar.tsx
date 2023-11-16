import {useState} from 'react';

export default function useSideBar() {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState('Home');
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleSideBarNavigation = ({itemNav}) => {
    setSelectedNavigationItem(itemNav);
    setIsSideBarOpen(false);
  };

  return {
    isSideBarOpen,
    selectedNavigationItem,
    handleSideBarNavigation,
    handleSidebarToggle,
  };
}
