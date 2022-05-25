import { useState, useEffect } from "react"
import axios from "axios"

const useConvert = (filename: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  // useEffect(() => {
  //   var xmlhttp = new XMLHttpRequest()
  //   xmlhttp.onreadystatechange = function () {
  //     // Request finished and response
  //     // is ready and Status is "OK"
  //     if (this.readyState === 4) {
  //       setIsLoading(false)
  //       if (this.status === 200) {
  //         parseWCUResponse(this)
  //       } else {
  //         setError(this.statusText)
  //       }
  //     }
  //   }

  //   setIsLoading(true)
  //   xmlhttp.open("GET", filename, true)
  //   xmlhttp.send()
  // }, [filename])

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(filename, {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
      })
      .then(function (response) {
        setIsLoading(false)
        setData(response.data)
      })
      .catch(function (error) {
        setIsLoading(false)
        setError(error)
      })
  }, [filename])

  const parseWCUResponse = (xml: any) => {
    const xmlDoc = xml.responseXML

    const cards = xmlDoc.getElementsByTagName("card")

    setData(
      cards.map((card: any) => ({
        question:
          card.getElementsByTagName("Question")[0].childNodes[0].nodeValue,
        answer: card.getElementsByTagName("Answer")[0].childNodes[0].nodeValue,
        score: card.getElementsByTagName("Score")[0].childNodes[0].nodeValue,
      }))
    )
  }

  return {
    isLoading,
    data,
    error,
  }
}

export default useConvert
