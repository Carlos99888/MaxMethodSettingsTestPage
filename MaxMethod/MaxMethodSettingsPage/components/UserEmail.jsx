import { useState} from 'react'

function UserEmail({ email, onSave }) {

    const [isEditing, setIsEditing] = useState(false)
    const [tempEmail, setTempEmail] = useState(email)

    const handleSave = () => {
        onSave(tempEmail)
        setIsEditing(false)
    }

    return(
        <div className="user-name">
            <p>Email:</p>

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={tempEmail}
                        onChange={(e) => setTempEmail(e.target.value)}
                    />
                    <button 
                        onClick={handleSave}
                        className="save-button"
                    >Save</button>
                    </>
            ) : (
            <>
                <span>{email}</span>
                <button 
                    onClick={() => setIsEditing(true)}
                    className="edit-button"
                >Edit</button>
            </>
            )}
        </div>
    )
}

export default UserEmail;