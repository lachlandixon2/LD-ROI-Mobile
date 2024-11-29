const API_BASE_URL = "http://localhost:3000/api";

export async function fetchDepartments() {
  try {
    const response = await fetch(`${API_BASE_URL}/departments`);
    if (!response.ok) throw new Error("Failed to fetch Department");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchPersonById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/people/${id}`);
    if (!response.ok) throw new Error("Failed to fetch Person");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function addPerson(personData) {
  try {
    const response = await fetch(`${API_BASE_URL}/people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    });
    if (!response.ok) throw new Error("Failed to add Person");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function updatePerson(id, updatedData) {
  try {
    const response = await fetch(`${API_BASE_URL}/people/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to update Person");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchPeople() {
  try {
    const response = await fetch(`${API_BASE_URL}/people`);
    if (!response.ok) throw new Error("Failed to fetch People");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function deletePerson(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/people/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete Person");
    return true;
  } catch (error) {
    throw error;
  }
}
