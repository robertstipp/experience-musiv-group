import React from "react"
import PackageCard from "./PackageCard"

const PackageList = ({ packages = [] }) => {
  return (
    <div>
      <PackageCard
        title="Package #1"
        price="149"
        items={["Playlist", "Billboard", "MTV"]}
      />
    </div>
  )
}

export default PackageList
