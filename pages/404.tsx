import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// 3秒後にrootページにリダイレクトさせる

const NotFound: React.FC = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    
    return (
        <div className="not-found">
            <h1>Ooooops.</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to <Link href="/"><a >Home page</a></Link></p>
        </div>
    );
}

export default NotFound;