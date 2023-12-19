function BoxSizing() {
    return (
        <>
            {/* em - dua vao phan tu me - vd fontsize co size 19px thi 1em = 19px */}
            {/* rem - dua vao kich thuoc fontsize cua phan tu cha */}
            {/* gap - tao khoang cach giua 2 doi tuong */}
            <div className="grid grid-cols-2 gap-4 columns-2">
                <div className="bg-pink-400">
                    <div className="grid grid-cols-3 h-10 w-10 bg-green-400">
                        <div className="box-border h-2 w-2  bg-red-400"><p>1</p></div>
                        <div className="box-border h-2 w-2  bg-red-400">2</div>
                        <div className="box-border h-2 w-2  bg-red-400">3</div>
                    </div>
                </div>
                <div className=" bg-pink-400">
                    <div className="h-10 w-10 bg-green-400">
                        <div className="box-border h-2 w-2  bg-red-400">red</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BoxSizing

