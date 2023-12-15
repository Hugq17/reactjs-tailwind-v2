function AspectRatio() {
    return (
        <>
            <iframe
                // w-full tạo khung hình responsive 
                //aspect-[4/3] tạo tỉ lệ khung hình 
                height="800"
                className='w-full aspect-[4/3]'
                src="https://www.youtube.com/embed/Pys2iOT9rpw?list=RDPys2iOT9rpw"
                title="WEAN – shhhhhhh.. feat tlinh (Official Lyrics Video)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            >
            </iframe>
        </>
    )
}
export default AspectRatio;
