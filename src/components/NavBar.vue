<template>
    <header class="">
        <nav class="navBar">
            <div class="navLeft">
                <img src="../assets/logo.png" alt="Logo" class="logoImg" />
                <span class="logoName">himalayas</span>
            </div>

            <div class="navRight">
                <ul class="navLinks">
                    <li><a href="#" class="">
                            Jobs <span class="">▼</span>
                        </a></li>
                    <li><a href="#" class="">
                            Companies <span class="">▼</span>
                        </a></li>
                    <li><a href="#" class="">Pricing</a></li>
                    <li><a href="#" class="">Advice</a></li>
                    <li><a href="#" class="">Updates</a></li>
                    <li><a href="#" class="">Community</a></li>
                </ul>

                <img src="https://i.pravatar.cc/32?img=12" alt="User" class="userProfilePicture" />
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const menuAberto = ref(false)
</script>
