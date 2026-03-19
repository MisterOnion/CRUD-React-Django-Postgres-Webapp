const BASE_URL = "http://localhost:8000/api/announcements/"; // put '/' for your backend URL so it applies to all API functions

export const getAnnouncements = async () => {
  const res = await fetch(BASE_URL);
  const result = await res.json();
  console.log("GET Response: ", result)
  return result;
};

export const createAnnouncement = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    // beware of extra "/" for url, leads to 'unsupported media type' error 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // JSON can only be read once in a single response
  const result = await res.json();
  console.log("POST Response: ", result)
  return result;
};

export const updateAnnouncement = async (id, data) => {
  const res = await fetch(`${BASE_URL}${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log("PUT Response: ", result)
  return result;
};

export const deleteAnnouncement = async (id) => {
  await fetch(`${BASE_URL}${id}/`, { method: "DELETE" });
};
