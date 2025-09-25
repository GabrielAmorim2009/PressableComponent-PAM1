import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Sobre() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.titulo}>Sobre a Loja</Text>
			<Text style={styles.texto}>
				Bem-vindo à nossa loja de moda e acessórios! Aqui você encontra produtos originais das melhores marcas, com garantia de qualidade e entrega rápida para todo o Brasil.
			</Text>
			<Text style={styles.subtitulo}>Nossa Missão</Text>
			<Text style={styles.texto}>
				Oferecer uma experiência de compra segura, prática e com atendimento personalizado, trazendo as últimas tendências do mundo fashion para você.
			</Text>
			<Text style={styles.subtitulo}>Valores</Text>
			<Text style={styles.texto}>
				- Qualidade
				- Transparência
				- Respeito ao cliente
				- Inovação
			</Text>
			<Text style={styles.subtitulo}>Contato</Text>
			<Text style={styles.texto}>
				E-mail: contato@lojamoda.com.br{"\n"}
				WhatsApp: (11) 99999-9999
			</Text>
			<View style={styles.bb}></View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		alignItems: 'center',
		backgroundColor: '#f5efdb',
		minHeight: '100vh',
	},
	titulo: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 18,
		color: '#b8860b',
		textAlign: 'center',
	},
	subtitulo: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 18,
		marginBottom: 8,
		color: '#333',
		textAlign: 'center',
	},
	texto: {
		fontSize: 16,
		color: '#444',
		textAlign: 'center',
		marginBottom: 10,
		lineHeight: 22,
	},
	bb: {
		height: 80,
		width: '100%',
		backgroundColor: '#f5efdb',
	},
});
