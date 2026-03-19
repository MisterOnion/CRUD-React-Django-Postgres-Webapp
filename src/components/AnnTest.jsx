import {useState, useEffect} from "react"
import {
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../../backend/services/CRUD";
import './AnnTest.css'

// React components must begin with Capital Letter 
// Starting with lowercase letter is treated as plain HTML element
function AnnTest(){
    // React State
    const [announcements, setAnnouncements] = useState([]);
    const [formData, setFormData] = useState({
        announcement_content: "",
        author: "",
    });
    const [selectedId, setSelectedId] = useState(null); // track which row is being edited
    const [isEditing, setIsEditing] = useState(false);

    // read
    useEffect(() => {
        fetchAnnouncements();
    }, [])

    const fetchAnnouncements = async () => {
        const data = await getAnnouncements();
        setAnnouncements(data);
    };

    // handle input change in form
    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };
    
    // create logic 
    const handleCreate = async () => {
        if (!formData.announcement_content || !formData.author) return;
        await createAnnouncement(formData);
        setFormData({ announcement_content: "", author: "" });
        fetchAnnouncements(); // refresh list
    };

    // update logic
    const handleUpdate = async () => {
        if (!selectedId) return;
        await updateAnnouncement(selectedId, formData);
        setFormData({announcement_content: "", author: ""});
        setSelectedId(null);
        setIsEditing(false);
        fetchAnnouncements();
    };

    // select row logic
    const handleEdit = (ann) => {
        setSelectedId(ann.announcement_id);
        setFormData({
            announcement_content: ann.announcement_content,
            author: ann.author,
        });
        setIsEditing(true);
    };

    // delete logic
    const handleDelete = async (id) => {
        await deleteAnnouncement(id);
        fetchAnnouncements();
    }

    return (
        // must have one parent element in React JSX
        <>
            <section id="header">
                <div>
                    <h1><i><u>Announcement List</u></i></h1>
                </div>
            </section>

            {/* form start */}
            <section id="data_take_in">
                <div id="data"> 
                    <label>Announcement Content</label>
                    <input 
                    
                        name="announcement_content"
                        value={formData.announcement_content}
                        onChange={handleChange}
                        placeholder="Enter announcement content"
                    />

                    <label>Author</label>
                    <input
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter Author Name"
                    />

                </div>
                {/* buttons */}
                <div id="button">
                    {!isEditing ? (
                        <button onClick={handleCreate}>Create</button>
                    ) : (
                        <>
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={() => {setIsEditing(false); setFormData({ announcement_content: "", author: "" });}}>
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </section>

            {/* announcement table */}
            <section id='data_display'>
                <table >
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th>Date/Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {announcements.map((ann) => (
                        <tr key={ann.announcement_id}>
                            <td>{ann.announcement_id}</td>
                            <td>{ann.announcement_content}</td>
                            <td>{ann.author}</td>
                            <td>{new Date(ann.created_at).toLocaleString()}</td>
                            <td>
                            <button onClick={() => handleEdit(ann)}>Edit</button>
                            <button onClick={() => handleDelete(ann.announcement_id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </>
    );
}


export default AnnTest
