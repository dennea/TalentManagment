import { Modal, useMantineTheme } from '@mantine/core';

function PortfolioModal({modalOpened,setModalOpened,image}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
      style = {{alignItems:"center"}}
    >
      <img src={image} alt="" style={{maxHeight:"600px",maxWidth:"1600px",objectFit:"contain",alignSelf:"center"}}/>
    </Modal>
  );
}

export default PortfolioModal