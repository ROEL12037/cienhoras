const shortenTitle = async (arr) => {
    for (const post of arr) {
        if (post.event.length > 17) {
            post.event = post.event.slice(0, 13) + '...'
        }
    }
}

module.exports = {
    shortenTitle
}