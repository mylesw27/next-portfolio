// @ means start in the project root directory (where the package.json lives)
import styles from "@/styles/About.module.css"
import { useState } from "react"
// special next js images that speed up SSR caching
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <div>
            <style jsx>{`
                .bigHeader {
                    font-size: ${fontSize}rem;
                    font-
                }
            `}</style>
            <h1 className="bigHeader">About Me</h1>

            <p className={styles.greenText}>I am a super cool software engineer now. I make all kinds of neat project with the codes 💻</p>

            {/* local images are stored in @/public */}
            {/* regurla <img /> tags work as well, if you cannot provide a width and height */}
            <Image 
                src="/next.svg"
                alt="next logo"
                // next Image components NEED a predefined pixel height and width
                width={400}
                height={400}
            />

            {/* using another hosting domain for images */}
            {/* <Image
                src="https://placekitten.com/450/450"
                alt="an image of a kitten"
                width={450}
                height={450}
            /> */}

            <button onClick={() => setFontSize(fontSize + 1)}>++</button>
        </div>
    )
}