import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/UploadAction';
import { updateUser } from '../../actions/UserAction';

function ProfileModal({modalOpened,setModalOpened, data}) {
  const theme = useMantineTheme();
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch()
  const param = useParams()
  const {user} = useSelector((state)=>state.authReducer.authData)

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        event.target.name === "profileImg" ? setProfileImage(img) : setCoverImage(img)
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let UserData = formData; 

    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  }

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
            name="firstname"
            placeholder='First Name'
            onChange={handleChange}
            value = {formData.firstname}/>
            <input 
            type="text" 
            className="infoInput" 
            name="lastname"
            placeholder='Last Name'
            onChange={handleChange}
            value = {formData.lastname}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="about"
            placeholder='Headline'
            onChange={handleChange}
            value = {formData.about}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="location"
            placeholder='Current Location'
            onChange={handleChange}
            value = {formData.location}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="motherAgent"
            placeholder='Mother Agency'
            onChange={handleChange}
            value = {formData.motherAgent}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="height"
            placeholder='Height'
            onChange={handleChange}
            value = {formData.height}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="eyes"
            placeholder='Eyes'
            onChange={handleChange}
            value = {formData.eyes}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="hair"
            placeholder='Hair'
            onChange={handleChange}
            value = {formData.hair}/>
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="waist"
            placeholder='Waist'
            onChange={handleChange}
            value = {formData.waist} />
        </div>
        <div>
            <input 
            type="text" 
            className="infoInput" 
            name="shoes"
            placeholder='Shoes'
            onChange={handleChange}
            value = {formData.shoes}/>
        </div>
        <div>
            Profile Image 
            <input type="file" name= 'profileImg' onChange = {onImageChange} />
            Cover Image
            <input type="file" name = 'coverImg' onChange = {onImageChange} />
        </div>
        <button className="button infoButton" onClick = {handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal