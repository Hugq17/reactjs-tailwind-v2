function Tricks() {
    return (
        <>
            {/* bg - background */}
            {/* hover:bg - hover vao backgournd va doi mau purple */}
            {/* place-items-center - dat items vao vi tri chinh giua khoi */}
            {/* group - group vao 1 doi tuong */}
            {/* peer - peer vao nhiu doi tuong */}
            <div className="peer/name group grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400">
                <div className="h-5 w-5 bg-white group-hover/other-name:bg-red-400"></div>
                <div className="h-5 w-5 bg-white hover:bg-red-400"></div>
            </div>
            <div className="h-20 w-20 bg-green-400 peer-hover/name:bg-pink-500"></div>
        </>
    )
}
export default Tricks;