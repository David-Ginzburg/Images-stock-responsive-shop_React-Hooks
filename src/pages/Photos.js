import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils/"

function Photos() {
    const {photosArray} = useContext(Context)
    const photos = photosArray.map((item, index) => {
        return <Image key={item.id} img={item} className={getClass(index)} />
    })
    return (
        <div className="container">
            <div className="photos">
                {photos}
            </div>
        </div>
    )
}

export default Photos