import { useState} from 'react'

function UserName({ name, onSave }) {
    const[isEditing, setIsEditing] = useState(false)
    const [tempName, setTempName] = useState(name)

    const handleSave = () => {
        onSave(tempName)
        setIsEditing(false)
    }
    return(
        <div className="user-name">
            <p>Name:</p> 
            {isEditing ? (
            <>
                <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                />
                <button 
                    onClick={handleSave}
                    className="save-button"
                >Save</button>
            </>
            ) : (
            <>
                <span>{name}</span>
                <button 
                    onClick={() => setIsEditing(true)}
                    className="edit-button"
                >Edit</button>
            </>
            )}    
        </div>
    )
}

export default UserName;