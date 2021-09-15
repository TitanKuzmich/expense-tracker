const formatDate = (date) => {
    const d = new Date(date)
        .toLocaleDateString()
        .split(".")

    if(d[0].length < 2){
        d[0] = `0${d[0]}`
    }

    if(d[1].length < 2){
        d[1] = `0${d[1]}`
    }

    return d.reverse().join('-')
}

export default formatDate