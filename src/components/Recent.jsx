import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

export default function Recent({word}) {

  const [result, setResult] = useState([])

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => setResult(data))
  })



  const [modal, setModal] = useState(false)

  function open(){
    setModal(true)
  }

  function close(){
    setModal(false)
  }

  return (
    <>
      <li onClick={open}>
        <p>{word}</p>
      </li>

      <Modal
        isOpen={modal}
        onAfterOpen={open}
        onRequestClose={close}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h1 className="name">{result[0]?.word || result?.title || "Example"}</h1>
        <h2 className="phonetic">{result[0]?.phonetic || "ex"}</h2>

        <p className="definition">{result[0]?.meanings[0].definitions[0].definition || result?.message ||"example"}</p>

        <span className="example">{result[0]?.meanings[0].synonyms[0] || result?.resolution || "No synonyms"}</span>
      </Modal>
    </>
  )
}

Recent.propTypes = {
    word: PropTypes.node,
}