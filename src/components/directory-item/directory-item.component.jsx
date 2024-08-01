import { useNavigate } from 'react-router-dom';

import { BackgroupImage, Body, DicrectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => (navigate(route));

  return (
    <DicrectoryItemContainer onClick={onNavigateHandler}>
      <BackgroupImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DicrectoryItemContainer>
  );
};

export default DirectoryItem;