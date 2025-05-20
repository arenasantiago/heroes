import React, { use, useEffect, useState } from 'react';
import { fetchSuperHeroes } from '../api/superHeroApi';
import { ActivityIndicator, ScrollView } from 'react-native-web';
import CharacterList from '../components/characterList';
import { Button, Text, View } from 'react-native';

export default function ListHome({ }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [totalPages, setTotalPages] = useState(0);

    const fetchData = async (page) => {
        setLoading(true);
      try {

        const data = await fetchSuperHeroes();
        let datos = [];
        if(page > 1){
            for(let i = (page - 1) * 10; i < page * 10; i++){
                datos[i] = data[i];
            }
        }else{
            for(let i = 0; i < 10; i++){
                datos[i] = data[i];
            }
        }
        setTotalPages(data.length)
        setCharacters(datos);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        fetchData(page);
    }, [page, statusFilter]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
    };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <ScrollView>
        <Text>Lista de personajes</Text>
        {loading ? (
            <ActivityIndicator size='large' color='red'/>
        ) : 
            <View>
                <View>
                </View>
                <CharacterList characters={characters}/>
            </View>

        }
        <View>
            <Button title="Prev" onPress={handlePrevious} disabled={page === 1} />
            <Text>Page {page} of {totalPages}</Text>
            <Button title="Next" onPress={handleNext} disabled={page === totalPages} />
      </View>
    </ScrollView>
  );
}