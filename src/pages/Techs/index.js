import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  List,
  Name,
  ProfileButton,
  SubmitButton,
  Tech,
} from './styles';

const Techs = () => {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState(null);

  const navigation = useNavigation();

  async function handleAddTech() {
    setLoading(true);

    const { data } = await api.post('/techs/', {
      id: newTech,
    });
    setTechs([...techs, data]);
    setLoading(false);
    setNewTech(null);
    Keyboard.dismiss();
  }

  async function handleLoadTechs() {
    const { data } = await api.get('/techs');
    setTechs(data);
  }

  useEffect(() => {
    handleLoadTechs();
  }, []);

  async function handleDeleteTech(id) {
    await api.delete(`/techs/${id}`);
    const filteredTechs = techs.filter((item) => item.id !== id);
    setTechs(filteredTechs);
  }

  function handleNavigateToDetail(tech) {
    navigation.navigate('TechDetails', { tech });
  }
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar tecnologia"
          value={newTech}
          onChangeText={setNewTech}
          returnKeyType="send"
          onSubmitEditing={handleAddTech}
        />
        <SubmitButton loading={loading} onPress={handleAddTech}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>
      <List
        data={techs}
        keyExtractor={(tech) => tech.id}
        renderItem={({ item }) => (
          <Tech>
            <Name>{item.id}</Name>
            <ProfileButton
              background="#FFC107"
              onPress={() => handleNavigateToDetail(item)}
            >
              <Icon name="design-services" size={20} color="#FFF" />
            </ProfileButton>
            <ProfileButton
              background="#E0A800"
              onPress={() => handleDeleteTech(item.id)}
            >
              <Icon name="delete" size={20} color="#FFF" />
            </ProfileButton>
          </Tech>
        )}
      />
    </Container>
  );
};

export default Techs;
