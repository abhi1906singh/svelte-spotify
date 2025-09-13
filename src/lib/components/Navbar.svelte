<script lang="ts">
	let isOpen = false;
	let showProfile = false;

	// Example user (replace with your session/auth user later)
	let user = {
		name: 'Abhinandan',
		email: 'abhi@gmail.com',
		avatar: 'https://i.pravatar.cc/40?img=3'
	};

	function handleProfileClick() {
		showProfile = !showProfile;
		console.log(showProfile, 'eClickhandleProfileClick');
	}
</script>

<nav class="navbar">
	<div class="container">
		<a href="/" class="logo">🎵 MyApp</a>

		<!-- Nav Links -->
		<ul class:open={isOpen}>
			<li><a href="/">Home</a></li>
			<li><a href="/features">Features</a></li>
			<li><a href="/pricing">Pricing</a></li>
		</ul>

		<!-- Profile Icon -->
		<div class="profile">
			{#if user}
				<div
					role="button"
					tabindex="0"
					onclick={handleProfileClick}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							handleProfileClick();
						}
					}}
				>
					<img src={user.avatar} alt="Profile" class="avatar" />
				</div>

				{#if showProfile}
					<div class="dropdown">
						<div class="dropdown-header">
							<img src={user.avatar} alt="Profile" class="avatar" />
							<div class="info">
								<p class="name">{user.name}</p>
								<p class="email">{user.email}</p>
							</div>
						</div>
						<hr />
						<a href="/profile">Profile</a>
						<a href="/settings">Settings</a>
						<a href="/logout" class="logout">Logout</a>
					</div>
				{/if}
			{:else}
				<a href="/login" class="login-btn">Login</a>
			{/if}
		</div>

		<!-- Mobile Toggle -->
		<button class="menu-toggle" onclick={() => (isOpen = !isOpen)}>☰</button>
	</div>
</nav>

<style lang="scss" scoped>
	.navbar {
		background: #1db954;
		color: white;
		padding: 0.75rem 1.5rem;

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 1200px;
			margin: 0 auto;
			width: 100%;
		}

		.logo {
			font-size: 1.3rem;
			font-weight: bold;
			text-decoration: none;
			color: white;
		}

		ul {
			list-style: none;
			display: flex;
			gap: 1.5rem;
			margin: 0;
			padding: 0;

			li a {
				color: white;
				text-decoration: none;
				font-weight: 500;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		.profile {
			position: relative;
			display: flex;
			align-items: center;

			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				border: 2px solid white;
				cursor: pointer;
				transition: transform 0.2s ease;

				&:hover {
					transform: scale(1.05);
				}
			}

			.dropdown {
				position: absolute;
				top: 50px;
				right: 0;
				background: white;
				color: #333;
				border-radius: 8px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
				width: 200px;
				overflow: hidden;
				z-index: 1000;

				.dropdown-header {
					display: flex;
					align-items: center;
					padding: 0.8rem;
					gap: 0.5rem;

					.avatar {
						width: 40px;
						height: 40px;
						border: 2px solid #1db954;
					}

					.info {
						.name {
							font-weight: 600;
							color: #111;
						}
						.email {
							font-size: 0.85rem;
							color: #666;
						}
					}
				}

				hr {
					margin: 0.5rem 0;
					border: none;
					border-top: 1px solid #eee;
				}

				a {
					display: block;
					padding: 0.7rem 1rem;
					color: #333;
					text-decoration: none;
					font-size: 0.95rem;

					&:hover {
						background: #f9f9f9;
					}

					&.logout {
						color: red;
						font-weight: 600;
					}
				}
			}

			.login-btn {
				background: white;
				color: #1db954;
				padding: 0.4rem 0.8rem;
				border-radius: 20px;
				text-decoration: none;
				font-weight: 600;

				&:hover {
					background: #f1f1f1;
				}
			}
		}

		.menu-toggle {
			display: none;
			background: none;
			border: none;
			font-size: 1.5rem;
			color: white;
			cursor: pointer;
		}
	}

	// Mobile Responsive
	@media (max-width: 768px) {
		.navbar {
			ul {
				position: absolute;
				top: 60px;
				left: 0;
				right: 0;
				background: #1db954;
				flex-direction: column;
				align-items: center;
				padding: 1rem;
				display: none;

				&.open {
					display: flex;
				}
			}

			.menu-toggle {
				display: block;
			}
		}
	}
</style>
