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
        <main className="photos">
            {photos}
        </main>
    )
}

export default Photos