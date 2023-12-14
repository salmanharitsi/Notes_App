import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { LuArchive, LuArchiveRestore } from "react-icons/lu";

const NoteItemAction = ({ onDeleteNote, onArchiveNote, id, archived }) => {
    return (
        <div className="note-item__action">
            <button
                id={id}
                onClick={() => onArchiveNote(id)}
                aria-label="Archive "
                className="note-item__archive-button"
            >
                {archived ? <LuArchiveRestore /> : <LuArchive />}
            </button>
            <button
                id={id}
                onClick={() => onDeleteNote(id)}
                aria-label="Delete "
                className="note-item__delete-button"
            >
                <MdOutlineDelete />
            </button>
        </div>
    );
};

export default NoteItemAction;
