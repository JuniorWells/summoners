const getPosts = async (name) => {
    const response = await fetch(`https://localhost:7261/api/Post/${name}`);
    const deserializedJSON = await response.json();
    console.log(deserializedJSON);
    return deserializedJSON;
}

export default getPosts;