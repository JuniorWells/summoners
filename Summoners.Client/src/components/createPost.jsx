import { useState , useEffect } from "react";

const CreatePost = ({ name, flag, setFlag }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const sendData = async (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
          Title: e.target["title"].value,
          Description:e.target["description"].value,
        //   ImageUrl:e.target["imageUrl"].value
        })
        console.log(`body: ${body}`);
        const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: myHeaders,
          body: body,
          redirect: 'follow'
        };

        const response = await fetch(`https://localhost:7261/api/Post/${name}`, requestOptions);
        setTitle('');
        setDescription('');
        setFlag([!flag]);
        // setSuccessMessage('Movie successfully added !')
    }

    return (
        <div>
            <form action="" onSubmit={sendData}>
                <input type="text" placeholder="Set a title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder="Set a description" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                <button>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;