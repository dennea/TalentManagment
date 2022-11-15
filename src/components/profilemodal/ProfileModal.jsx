import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >
      <form className='infoForm'>
        <h3>Your Info</h3>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="FirstName"
            placeholder='First Name'/>
            <input 
            type="text" 
            className="infoInput" 
            name="LastName"
            placeholder='Last Name'/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="Location"
            placeholder='Current Location'/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="motherAgency"
            placeholder='Mother Agency'/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="height"
            placeholder='Height'/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="eyes"
            placeholder='Eyes'/>
        </div>
        <div>
            Profile Image 
            <input type="file" name= 'profileImg'/>
            Cover Image
            <input type="file" name = 'coverImg' />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal