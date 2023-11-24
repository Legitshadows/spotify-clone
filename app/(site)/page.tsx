import Header from "@/components/Header";
import ListItem from "@/components/ListItem";



var time = new Date()
var curHr = time.getHours()
let tiempo = ""

if (curHr < 12) {
  tiempo = "Good morning"
} else if (curHr < 18) {
  tiempo = "Good afternoon"
} else {
  tiempo = "Good evening"
}

export default function Home() {
 return (
  <div className="
    bg-neutral-900
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
  ">
    <Header>
      <div className="mb-2">
        <h1 className="
          text-white
          text-3xl
          font-semibold
        ">{tiempo}
        </h1>
        <div
          className="
            grid
            grid-cols-1
            sm:gris-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          "
        >
          <ListItem
            image="/assets/liked.png"
            name="Liked Songs"
            href="liked"
          />
        </div>
      </div>
    </Header>
    <div className="mt-2 mb-7 px-6">
      <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
      </div>
      <div>
        Adding songs here in the future
      </div>
    </div>
  </div>
 )
}
