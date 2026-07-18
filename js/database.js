// js/database.js
import { db } from './firebase.js';
import { collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const INGRESSOS_COLLECTION = 'ingressos';

// Criar ou atualizar um ingresso
export async function salvarIngresso(dados) {
  const { transacao, ...resto } = dados;
  if (!transacao) throw new Error('Transação é obrigatória');
  const docRef = doc(db, INGRESSOS_COLLECTION, transacao);
  await setDoc(docRef, {
    ...resto,
    transacao,
    status: 'ativo',
    criadoEm: Date.now()
  }, { merge: true });
  return docRef;
}

// Buscar um ingresso por transação
export async function buscarIngresso(transacao) {
  const docRef = doc(db, INGRESSOS_COLLECTION, transacao);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

// Listar todos os ingressos
export async function listarIngressos() {
  const querySnapshot = await getDocs(collection(db, INGRESSOS_COLLECTION));
  const ingressos = [];
  querySnapshot.forEach(doc => {
    ingressos.push({ id: doc.id, ...doc.data() });
  });
  return ingressos;
}

// Atualizar status de um ingresso
export async function atualizarStatus(transacao, status, dataUso = null) {
  const docRef = doc(db, INGRESSOS_COLLECTION, transacao);
  const updateData = { status };
  if (dataUso) updateData.dataUso = dataUso;
  await updateDoc(docRef, updateData);
}

// Excluir um ingresso
export async function excluirIngresso(transacao) {
  const docRef = doc(db, INGRESSOS_COLLECTION, transacao);
  await deleteDoc(docRef);
}

// Buscar ingressos por status
export async function buscarIngressosPorStatus(status) {
  const q = query(collection(db, INGRESSOS_COLLECTION), where('status', '==', status));
  const querySnapshot = await getDocs(q);
  const ingressos = [];
  querySnapshot.forEach(doc => {
    ingressos.push({ id: doc.id, ...doc.data() });
  });
  return ingressos;
}