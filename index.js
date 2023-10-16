const CatImageGenerator = () => {

    const CatImages = [
        "https://img.freepik.com/free-photo/cute-domestic-kitten-sitting-leaf-generative-ai_188544-8316.jpg",
        "https://img.freepik.com/premium-photo/painting-cat-with-green-eyes-generative-ai_922357-9651.jpg",
        "https://img.freepik.com/premium-photo/cute-little-cat-playing-forest_432372-183.jpg",
        "https://img.freepik.com/premium-photo/close-up-gray-kitten-natureai_725102-3022.jpg",
        "https://img.freepik.com/premium-photo/there-is-small-kitten-sitting-log-dark-generative-ai_958108-6670.jpg",
    ]

    var randomImage = Math.floor(Math.random() * 5);

    return CatImages[randomImage];

}