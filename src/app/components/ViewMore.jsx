
import Link from "next/link"

const ViewMore = () => {
  return (
    <section>
        <div>
            <h4>
            <Link href="https://github.com/nemokyu" className="flex flex-row center text-white underline hover:translate-x-10% hover:text-blue-700 font-mononoki hover:text-scale-110">
                ↳ View more projects of mine! 
            </Link>
            </h4>
        </div>
    </section>

  )
}

export default ViewMore
