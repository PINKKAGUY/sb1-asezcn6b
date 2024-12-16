import type { Resource } from '../types/resource';

const API_URL = 'http://localhost:5000/api/resources';

export async function fetchResources(): Promise<Resource[]> {
  const token = localStorage.getItem('token');
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch resources');
  }
  return response.json();
}

export async function createResource(formData: FormData): Promise<Resource> {
  const token = localStorage.getItem('token');
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to create resource');
  }
  
  return response.json();
}

export async function deleteResource(id: string): Promise<void> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete resource');
  }
}