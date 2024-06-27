const Heading = (props) => {
    // props adalah parameter sedangkan children adalah props yang sudah ada di dalam react untuk mendapatkan suatu kontent di dalam element yang di tuju.
    return <h1>{props.children}</h1>
}

export default Heading;
